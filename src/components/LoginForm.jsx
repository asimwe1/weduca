
import React from 'react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Checkbox } from '../components/ui/checkbox';

const LoginForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Login logic would go here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          required
          className="w-full"
        />
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <a href="#" className="text-sm text-green-600 hover:text-green-800">
            Forgot password?
          </a>
        </div>
        <Input
          id="password"
          type="password"
          placeholder="Enter your password"
          required
          className="w-full"
        />
      </div>
      
      <div className="flex items-center space-x-2">
        <Checkbox id="remember" />
        <label htmlFor="remember" className="text-sm text-gray-600">
          Remember me
        </label>
      </div>
      
      <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
        Sign In
      </Button>
      
      <div className="text-center mt-4">
        <span className="text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="#" className="text-green-600 hover:text-green-800 font-medium">
            Sign up
          </a>
        </span>
      </div>
    </form>
  );
};

export default LoginForm;
