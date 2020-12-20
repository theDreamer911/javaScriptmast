const domains = ["en.wiki.org", "codefights.com", "happy.net", "code.info"];
let domainsType = [];

for (i = 0; i < domains.length; i++) {
  jem = domains[i].split(".");
  //   console.log(domains[i]);
  if (jem[jem.length - 1] === "org") {
    // console.log("organization");
    domainsType.push("organization");
  }
  if (jem[jem.length - 1] === "com") {
    // console.log("commercial");
    domainsType.push("commercial");
  }
  if (jem[jem.length - 1] === "net") {
    // console.log("network");
    domainsType.push("network");
  }
  if (jem[jem.length - 1] === "info") {
    // console.log("information");
    domainsType.push("information");
  }
}

console.log(domainsType);
