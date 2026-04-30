/**
 * This is a helper entry point for Hostinger and other hosts
 * that strictly look for a .js file as a main entry point.
 */
import 'dotenv/config';
import { register } from 'node:module';
import { pathToFileURL } from 'node:url';

// Register tsx to allow importing .ts files directly
register('tsx/esm', pathToFileURL('./'));

// Import the actual server
import './server.ts';
