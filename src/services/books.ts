import { AuthAdapter } from "../api/fetchAuth";

const authAdapter = new AuthAdapter();

export const getAllBooks = async () => {
	const response: any = await authAdapter.get("/books").catch((err) => {
		console.log("err", err.response);
		return err.response;
	});

	return response;
};


export const getDetailBook = async () => {
	const response: any = await authAdapter.get("/books").catch((err) => {
		console.log("err", err.response);
		return err.response;
	});

	return response;
};