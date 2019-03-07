import axios from 'axios';
import { Location } from 'expo';
import qs from 'qs';

import { FETCH_JOBS } from './types';

//NOTE: using indeed no longer works; use github jobs instead
const JOB_ROOT_URL = 'http://api.indeed.com/ads/apisearch?';
const JOB_QUERY_PARAMS = {
  publisher: '4201738803816157',
  format: 'json',
  v: '2',
  latlong: 1,
  radius: 25,
  q: 'javascript'
};

const buildJobsUrl = zip => {
  const query = qs.stringify({ ...JOB_QUERY_PARAMS, l: zip });
  return `${JOB_ROOT_URL}${query}`;
};

export const fetchJobs = (region, callback) => async dispatch => {
  // try {
  //NOTE: use expo location api instead
  let zip = await Location.reverseGeocodeAsync(region);
  console.log(zip);

  //   const url = buildJobsUrl(zip);

  //   let { data } = await axios.get(url);
  //   dispatch({ type: FETCH_JOBS, payload: data });
  //   callback();
  // } catch (error) {
  //   console.log(error);
  // }
};
