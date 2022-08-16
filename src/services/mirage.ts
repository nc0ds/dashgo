import {
	createServer,
	Model,
	Factory,
	Response,
	ActiveModelSerializer,
} from 'miragejs';
import { faker } from '@faker-js/faker';

interface UserModel {
	name: string;
	email: string;
	created_at: string;
}

interface RequestQueryParams {
	page: string;
	per_page: string;
}

export const makeServer = () => {
	const server = createServer({
		serializers: {
			application: ActiveModelSerializer,
		},
		models: {
			user: Model.extend<Partial<UserModel>>({}),
		},
		factories: {
			user: Factory.extend({
				name() {
					return faker.name.findName();
				},
				email() {
					return faker.internet.email().toLowerCase();
				},
				createdAt() {
					return faker.date.recent(10);
				},
			}),
		},
		seeds(server) {
			server.createList('user', 200);
		},
		routes() {
			this.namespace = 'api';
			this.timing = 750;

			this.get('/users', function (schema, request) {
				const { page = 1, per_page = 10 } =
					request.queryParams as RequestQueryParams;

				const total = schema.all('user').length;

				const pageStart = (Number(page) - 1) * Number(per_page);
				const pageEnd = pageStart + Number(per_page);

				const users = this.serialize(schema.all('user'))
					.users.sort(
						(a: UserModel, b: UserModel) =>
							Number(new Date(b.created_at).getTime()) -
							Number(new Date(a.created_at).getTime())
					)
					.slice(pageStart, pageEnd);

				return new Response(200, { 'x-total-count': String(total) }, { users });
			});
			this.post('/users');

			this.namespace = '';
			this.passthrough();
		},
	});

	return server;
};
