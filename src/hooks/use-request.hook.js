import axios from 'axios';
import { useState } from 'react';

/**
 * Make Request POST, GET, PUT, DELETE
 * @constructor
 * @param {object} obj - An Object
 * @param {string} obj.url - The URL you want to send request to.
 * @param {string} obj.method - POST || GET || PUT || DELETE
 * @param {object} obj.body - An Objetct containing text parameters
 * @param {Function} onSuccess - Run function on success
 *
 * @returns {object}
 */
export default ({ url, method, body, onSuccess }) => {
  const [errors, setErrors] = useState(null);

  const doRequest = async (props = {}) => {
    try {
      setErrors(null);
      const response = await axios[method](url, { ...body, ...props });
      if (onSuccess) {
        onSuccess(response.data);
      }
      return response.data;
    } catch (err) {
      setErrors(
        <div className="alert alert-danger">
          <h4>Oooops...</h4>
          <ul className="my-0">
            {err.response.data.errors.map(err => (
              <li key={err.message}>{err.message}</li>
            ))}
          </ul>
        </div>
      );
    }
  };
  return { doRequest, errors };
};
