const API_BASE_URL = 'https://your-api-endpoint.com';

    interface LoginResponse {
      token: string;
      user: {
        id: string;
        name: string;
        email: string;
        points: number;
      };
    }

    export const api = {
      async login(email: string, password: string): Promise<LoginResponse> {
        const response = await fetch(`${API_BASE_URL}/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
          throw new Error('Login failed');
        }

        return response.json();
      },

      async getModules(): Promise<any[]> {
        const response = await fetch(`${API_BASE_URL}/modules`);
        return response.json();
      },

      async completeTask(taskId: string): Promise<{ points: number }> {
        const response = await fetch(`${API_BASE_URL}/tasks/${taskId}/complete`, {
          method: 'POST',
        });
        return response.json();
      },
    };
