import axios from 'axios'
import config from "../config";

export default class DingDing {
	public static send(platform: string, project: string) {
		return axios.post(config.ddHook, {
			msgtype: "text",
			text: {
				content: `${platform} 的 ${project} 已部署`
			}
		})
	}
}