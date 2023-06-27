import * as functions from '../functions.js'; // to initialize Functions

const jobsURL = 'https://www.arbeitnow.com/api/job-board-api';

export const APIService = {
    fetchJobs: async () => {
        try {
            const res = await fetch(jobsURL);
            const data = await res.json();

            return data;
        } catch (error) {
            return [];
        }

    },
    getJobs: async function () {
        const data = (await this.fetchJobs()).data;

        return data.mapKeysToCamelCase();
    }
}