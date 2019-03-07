import axios from 'axios';
import { Location } from 'expo';
import qs from 'qs';

import { FETCH_JOBS } from './types';

//NOTE: using indeed no longer works; use github jobs instead
const JOB_ROOT_URL = 'https://jobs.github.com/positions.json?';
const JOB_QUERY_PARAMS = {
  location: '',
  search: 'javascript'
};

const buildJobsUrl = zip => {
  const query = qs.stringify({ ...JOB_QUERY_PARAMS, location: zip });
  return `${JOB_ROOT_URL}${query}`;
};

export const fetchJobs = (region, callback) => async dispatch => {
  try {
    /*output is an array with index 0 holding the location data
    in format of { 
        city: 'Santa Cruz',
        country: 'United States',
        isoCountryCode: 'US',
        name: '598',
        postalCode: '95065',
        region: 'California',
        street: 'Upper Park Road' 
      }
    */
    let locations = await Location.reverseGeocodeAsync(region);
    let zip = locations[0] && locations[0].postalCode;

    /*
    github jobs ajax request info:
    base url: https://jobs.github.com/positions.json?
    queries: 
     search=javascript
     lat=lat
     long=long
     location= city name, zip code

     example would be https://jobs.github.com/positions.json?location=95065&search=javascript

  */

    const url = buildJobsUrl(zip);

    let { data } = await axios.get(url);
    dispatch({ type: FETCH_JOBS, payload: data });
    callback();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
