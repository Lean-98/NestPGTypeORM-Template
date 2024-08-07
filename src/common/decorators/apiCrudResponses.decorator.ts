import { applyDecorators } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

export function ApiCrudResponses(
  dto: any,
  operation: 'create' | 'read' | 'update' | 'delete' | 'login' | 'status',
  entityName: string,
) {
  const name = entityName || dto;

  const operationDescriptions = {
    create: {
      status: 201,
      description: `${name} was created.`,
    },
    read: {
      status: 200,
      description: `${name} fetched successfully.`,
    },
    update: {
      status: 200,
      description: `${name} was updated.`,
    },
    delete: {
      status: 200,
      description: `${name} was deleted.`,
    },
    login: {
      status: 200,
      description: `${name} logged in successfully`,
    },
    status: {
      status: 200,
      description: `${name} status fetched successfully.`,
    },
  };

  const selectedOperation = operationDescriptions[operation];

  return applyDecorators(
    ApiResponse({
      status: selectedOperation.status,
      description: selectedOperation.description,
      type: dto,
    }),
    ApiResponse({ status: 400, description: 'Bad request.' }),
    ApiResponse({ status: 401, description: 'Unauthorized.' }),
    ApiResponse({ status: 404, description: `${name} not found.` }),
    ApiResponse({ status: 409, description: `${name} conflict.` }),
    ApiResponse({ status: 500, description: 'Internal server error.' }),
  );
}
