import { AuthAdapter } from "../api/fetchAuth";

const authAdapter = new AuthAdapter();

export const getAllBooks = async (search?: string, filter?: string) => {
	const response: any = await authAdapter.get("/books", { params: { [filter as string]: search } }).catch((err) => {
		console.log("err", err.response);
		return err.response;
	});

	return response;
};

export const getDetailBook = async (id: string) => {
	const response: any = await authAdapter.get(`/books/${id}`).catch((err) => {
		console.log("err", err.response);
		return err.response;
	});

	return response;
};

export const getHistoryBooks = async () => {
	const response: any = await authAdapter.get("/books/history").catch((err) => {
		console.log("err", err.response);
		return err.response;
	});

	return response;
};

export const createNewBook = async (data: object) => {
	const response: any = await authAdapter.post("/books", data).catch((err) => {
		console.log("err", err.response);
		return err.response;
	});

	return response;
};

