import { AuthAdapter } from "../api/fetchAuth";

const authAdapter = new AuthAdapter();

export const createNewUser = async (data: object) => {
	const response: any = await authAdapter.post("/users", data).catch((err) => {
		console.log("err", err.response);
		return err.response;
	});

	return response;
};
