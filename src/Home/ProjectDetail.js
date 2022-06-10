import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
    const { projectId } = useParams();
    const [project, setProject] = useState({});

    useEffect(() => {
        const url = `project.json/${projectId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProject(data));
    }, []);
    return (
        <div>
            <h1>{projectId}</h1>
        </div>
    );
};

export default ProjectDetail;