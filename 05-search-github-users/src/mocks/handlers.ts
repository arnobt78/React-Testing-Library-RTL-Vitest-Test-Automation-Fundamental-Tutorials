import { graphql, HttpResponse } from 'msw';
import { mockRepositories } from '@/__tests__/utils';

export const handlers = [
  graphql.query('GetUser', ({ query, variables }) => {
    console.log('Intercepted GetUser GraphQL query:', query);
    const { login } = variables;
    if (login === 'request-error') {
      return HttpResponse.json({
        errors: [{ message: 'there was an error' }],
      });
    }
    if (login === 'invalid-username') {
      return HttpResponse.json({
        data: {
          user: null,
        },
        errors: [
          {
            message: `Could not resolve to a User with the login of ${login}.`,
          },
        ],
      });
    }
    return HttpResponse.json({
      data: {
        user: {
          name: login,
          avatarUrl: `https://github.com/images/${login}.jpg`,
          bio: 'Full-stack developer passionate about open source',
          url: `https://github.com/${login}`,
          repositories: {
            totalCount: 45,
            nodes: mockRepositories,
          },
          followers: {
            totalCount: 234,
          },
          following: {
            totalCount: 156,
          },
          gists: {
            totalCount: 27,
          },
        },
      },
    });
  }),
];
