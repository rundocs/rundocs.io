const core = require("@actions/core");

const cloudflare = require("cloudflare")({
    token: process.env["CLOUDFLARE_DNS_TOKEN"]
});
const zone_name = ".rundocs.io";
const zone_id = process.env["CLOUDFLARE_ZONE_ID"];

const data = require("./ns.js");


function check(resp) {
    if (resp.success) {
        return resp;
    } else {
        throw new Error(resp.messages);
    }
}

function fixed(name) {
    if (name != zone_name.replace(/^\./, "")) {
        name = name + zone_name;
    }
    return name;
}

function ns(type, proxied, resp, source) {
    let job = {
        create: [],
        update: [],
        remove: []
    };
    for (let name in source) {
        let [exist, update] = [false, false];
        for (let record of resp.result) {
            if (type == record.type) {
                if (name == record.name.replace(zone_name, "")) {
                    if (source[name] != record.content) {
                        console.log(name, source[name], record.content)
                        update = record.id;
                    }
                    exist = true;
                }
            }
        }

        if (exist) {
            if (update) {
                job.update.push({
                    name: fixed(name),
                    id: update,
                    content: source[name],
                    type: type,
                    proxied: proxied
                });
            }
        } else {
            job.create.push({
                name: fixed(name),
                content: source[name],
                type: type,
                proxied: proxied
            });
        }
    }
    // delete if it does not exist in the "source"
    for (let record of resp.result) {
        if (record.type == type) {
            let remove = true;
            for (let name in source) {
                if (name == record.name.replace(zone_name, "")) {
                    remove = false;
                }
            }
            if (remove) {
                job.remove.push({
                    name: record.name,
                    id: record.id,
                    content: record.content,
                    type: record.type,
                    proxied: record.proxied
                });
            }
        }
    }
    return job;
}

cloudflare.dnsRecords.browse(zone_id)
    .then(check)
    .then(function(resp) {
        return {
            cname: ns("CNAME", true, resp, data.cname),
            txt: ns("TXT", false, resp, data.txt),
        }
    })
    .then(async function(jobs) {
        for (let type in jobs) {
            for (let record of jobs[type].create) {
                check(await cloudflare.dnsRecords.add(zone_id, record));
            }
            for (let record of jobs[type].update) {
                check(await cloudflare.dnsRecords.edit(zone_id, record.id, record));
            }
            for (let record of jobs[type].remove) {
                check(await cloudflare.dnsRecords.del(zone_id, record.id));
            }
        }
        console.log(JSON.stringify(jobs, null, 2));
    })
    .catch((e) => core.setFailed(e.message));
