import { createClient } from "contentful";
import { useState,useEffect } from "react";

//Create client to fetch projects from contentful
const client = createClient({
      space: 'kxu62xdyg59p ',
      environment : 'master',
      accessToken: 'ZgPvqpleE7uEAe4Q0v6xGmDxB3mtp99znLuaY_itVyk',
});

//Create Custom hook to fetch projects
 export const usedFetchProjects = () => {
      const [loading, setLoading] = useState(true);
      const [projects, setProjects] = useState([]);

        const getData = async () => {
          try {
            const response = await client.getEntries({content_type: 'projects' });
      const projects = response.items.map ((items) => {
            const {title,url,image} = items.fields
            const {id} = items.sys.id
            const img = image?.fields?.file?.url
            return{title,url,id,img}
          })
            setProjects(projects);
            setLoading(false);
      }catch (error) {
            console.log(error);
            setLoading(false);
          }
        }
      
      useEffect(() => {
        getData()
      }, []);
     return {projects,loading}            
      }
      







