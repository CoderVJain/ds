# Romantic Website Application - replit.md

## Overview

This is a beautiful romantic website built with pure HTML, CSS, and JavaScript. The application is a personal love-themed website with pages for a home, gallery, and love letter. It features elegant romantic styling, smooth animations, floating hearts, and a royal/romantic design aesthetic using custom CSS and vanilla JavaScript.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with separate client and server directories, sharing common types and schemas. It's designed as a single-page application (SPA) with a REST API backend.

### Frontend Architecture
- **Framework**: Pure HTML5, CSS3, and Vanilla JavaScript
- **Styling**: Custom CSS with romantic color palette (rose gold, deep rose, royal purple, champagne)
- **Typography**: Google Fonts (Playfair Display, Dancing Script, Lato)
- **Navigation**: Single Page Application behavior with smooth section transitions
- **Animations**: CSS keyframes and JavaScript-powered floating hearts
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox

## Key Components

### Frontend Structure
- **Pages**: Home (romantic landing), Gallery (image showcase), Letter (love letter display), NotFound
- **Components**: Navigation, floating hearts animation, mobile menu, UI components
- **Routing**: Simple client-side routing with wouter
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

### Backend Structure
- **Routes**: Centralized route registration in `routes.ts`
- **Storage**: Abstracted storage interface with in-memory implementation (ready for database integration)
- **Development**: Vite integration for hot reloading during development

### Database Schema
- **Users Table**: Basic user model with id, username, password
- **Validation**: Zod schemas for type-safe data validation
- **ORM**: Drizzle with PostgreSQL dialect

## Data Flow

1. **Client Requests**: React components make API calls through TanStack Query
2. **API Layer**: Express routes handle requests and interact with storage layer
3. **Storage Layer**: Abstracted interface currently using in-memory storage, designed for easy database integration
4. **Response Handling**: Type-safe responses with proper error handling

## External Dependencies

### UI and Styling
- **Radix UI**: Headless UI components for accessibility
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **Custom Fonts**: Google Fonts (Playfair Display, Dancing Script, Lato)

### Database and ORM
- **@neondatabase/serverless**: Serverless PostgreSQL driver
- **Drizzle ORM**: Type-safe database operations
- **connect-pg-simple**: PostgreSQL session store

### Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type safety across the stack
- **ESBuild**: Fast JavaScript bundler for production

## Deployment Strategy

### Development
- Vite development server with hot module replacement
- Express server with TypeScript compilation via tsx
- Database migrations handled by Drizzle Kit

### Production
- Static frontend build served by Express
- Server-side rendering disabled (SPA mode)
- Environment-based configuration
- Database URL configuration required

### Build Process
1. Frontend: Vite builds React app to `dist/public`
2. Backend: ESBuild bundles server code to `dist/index.js`
3. Database: Drizzle migrations applied before deployment

### Key Configuration Files
- **Vite Config**: Frontend build and development setup
- **Drizzle Config**: Database connection and migration settings
- **TypeScript Config**: Shared configuration for client/server/shared code
- **Tailwind Config**: Custom theme and component styling

The application is structured for easy scaling and maintenance, with clear separation of concerns and type safety throughout the stack.