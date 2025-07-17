const axios = require("axios");
const jobModel = require("../models/jobModel");
const xmlToJson = require("../utils/xml2json");

const jobUrl = [
  "https://jobicy.com/?feed=job_feed",
  "https://jobicy.com/?feed=job_feed&job_categories=smm&job_types=full-time",
  "https://jobicy.com/?feed=job_feed&job_categories=seller&job_types=full-time&search_region=france",
  "https://jobicy.com/?feed=job_feed&job_categories=design-multimedia",
  "https://jobicy.com/?feed=job_feed&job_categories=data-science",
  "https://jobicy.com/?feed=job_feed&job_categories=copywriting",
  "https://jobicy.com/?feed=job_feed&job_categories=business",
  "https://jobicy.com/?feed=job_feed&job_categories=management",
];

const fetchAndSaveJob = async () => {
  for (let job of jobUrl) {
    try {
      const { data } = await axios.get(job);
      const json = await xmlToJson(data);

      const jobs = json.rss?.channel?.item || [];
      for (let item of Array.isArray(jobs) ? jobs : [jobs]) {
        const jobDetails = {
          title: item.title,
          link: item.link,
          publishDate: new Date(item.pubDate),
          description: item.description,
          jobLocation: item["job_listing:location"],
          jobType: item["job_listing:job_type"],
          companyName: item["job_listing:company"],
        };

        await jobModel.updateOne(
          { link: item.link },
          { $set: jobDetails },
          { upsert: true }
        );
      }
    } catch (error) {
      console.error("Failed to import from external api", error);
    }
  }
};

module.exports = fetchAndSaveJob;
