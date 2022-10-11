import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export const useStates = () => {
  const [states, setStates] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    (async function () {
      setisLoading(true);
      const { data: resp } = await axios.get(
        "https://www.universal-tutorial.com/api/getaccesstoken",
        {
          headers: {
            Accept: "application/json",
            "api-token":
              "8CZoyzUMps2xz8x4NSs0CfqfP-cu6WfbFAeV2a_LjmWw4c4L1LQDkmFpyq4Eixc-tUM",
            "user-email": "georgebsmith.tech@gmail.com"
          }
        }
      );

      const { data } = await axios.get(
        "https://www.universal-tutorial.com/api/states/Nigeria",
        {
          headers: {
            Authorization: "Bearer " + resp?.auth_token,
            Accept: "application/json"
          }
        }
      );

      setStates(data);
      setisLoading(false);
    })();
  }, []);
  return { states, isLoading };
};
