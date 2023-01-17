import http from 'k6/http';
import { check, sleep } from "k6";
const GENERIC_URL = 'http://192.168.64.2:30577';

export let options = {
    stages: [
        { duration: '30s', target: 50 },
        { duration: '30s', target: 100 },
        { duration: '30s', target: 200 },
    ]
};

export default function () {

    const response = http.get(GENERIC_URL);
    check(
        response, {
            "Status is 200": (r) => r.status == 200
        }
    );
}
