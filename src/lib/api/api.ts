import { projectFormInputType } from "@/types";
import { API_URL } from "@/utils/constant";

export const createProject = async (formData: projectFormInputType) => {
  const res = await fetch(`${API_URL}/api/project/create-project/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!res.ok) {
    throw new Error("Failed to create project");
  }

  return res.json();
};

export const fetchProjectDetails = async ({
  project_id,
}: {
  project_id: string;
}) => {
  try {
    const res = await fetch(
      `${API_URL}/api/project/complete-project-details/?project_id=${project_id}`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch project details");
    }

    return res.json();
  } catch (err) {
    console.log(err);
  }
};

export const deleteProject = async ({ project_id }: { project_id: string }) => {
  const res = await fetch(
    `${API_URL}/api/project/delete-project/?project_id=${project_id}`,
    {
      method: "DELETE",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to delete project");
  }
  return res.json();
};

export const completeProject = async ({
  project_id,
}: {
  project_id: string;
}) => {
  const res = await fetch(
    `${API_URL}/api/project/mark-project-as-completed/?project_id=${project_id}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ project_id }),
    }
  );
  if (!res.ok) {
    throw new Error("Failed to mark project as completed");
  }
  return res.json();
};

export const fetchLocation = async (params: {
  search: string;
  page: number;
}) => {
  const { search, page } = params;
  const apiKey = process.env.NEXT_PUBLIC_LOCATION_API_KEY;
  const res = await fetch(
    `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${search}&page=${page}&limit=10`, // Adjust pagination parameters as required
    {
      headers: {
        "x-rapidapi-key": `${apiKey}`, // Replace with your RapidAPI key
        "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch location");
  }

  return res.json();
};

export const fetchProjectLogistics = async ({
  project_id,
}: {
  project_id: string;
}) => {
  try {
    const res = await fetch(
      `${API_URL}/api/logistics/list-project-logistics/${project_id}`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch project logistics");
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchProjectCulture = async ({
  project_id,
}: {
  project_id: string;
}) => {
  try {
    const res = await fetch(
      `${API_URL}/api/culture/project-cultures/${project_id}`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch project Cultures");
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchProjectComplience = async ({
  project_id,
}: {
  project_id: string;
}) => {
  try {
    const res = await fetch(
      `${API_URL}/api/compliance/project-compliance/?project_id=${project_id}`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch project complience");
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
export const getSuggestedCrew = async (project_id: string) => {
  try {
    const res = await fetch(
      `${API_URL}/api/crew/view-suggested-crew/?project_id=${project_id}`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch suggested crew");
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
