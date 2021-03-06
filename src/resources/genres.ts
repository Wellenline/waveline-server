import { GenreModel } from "@src/models/genre";
import { Resource, Get } from "@wellenline/via";
@Resource("/genres")
export class Genres {
	@Get("/")
	public async index() {
		return await GenreModel.find();
	}
}
