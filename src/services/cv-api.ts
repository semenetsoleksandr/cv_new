import type {ISendMessageRequestBody} from "../types/messages.ts";

export class CvApi {
    async sendMessage(data: ISendMessageRequestBody) {
        const res = await fetch("http://localhost:8080/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
    }

    async delSkill (id: string | null) {
        fetch(`http://localhost:8080/skills/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
        });
    }
}





export const cvApi = new CvApi()