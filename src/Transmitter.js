import 'isomorphic-fetch';
import querystring from 'querystring';


export default class Transmitter {
    constructor(project, config, url) {
        this.project = project;
        this.url = url || config.defaults.trackerURL;

    }

    sendTracker(data) {
        const info = {
            data,
            project: this.project.token
        };

        return fetch(this.url, {
            credentials: 'include',
            method: 'POST',
            body: JSON.stringify(info),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        });
    }
}
