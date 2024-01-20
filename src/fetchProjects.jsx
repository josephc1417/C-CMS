import { createClient } from "contentful";
import { useState, useEffect } from "react";

const client = createClient({
  space: 'kxu62xdyg59p',
  environment: 'master',
  accessToken: 'ZgPvqpleE7uEAe4Q0v6xGmDxB3mtp99znLuaY_itVyk',
});
export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'projects' });
      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields;
        const { id } = item.sys;
        const img = image?.fields?.file?.url;
        return { title, url, id, img };
      });
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { projects, loading };
};
