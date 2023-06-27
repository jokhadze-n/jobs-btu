const jobsURL = 'https://www.arbeitnow.com/api/job-board-api';
import * as functions from '../functions.js'; // to initialize Functions

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