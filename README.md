# 🔗 ChatterChain

<div align="center">
  <img src="https://raw.githubusercontent.com/shkshreyas/ChatterChain/main/public/logo.svg" alt="ChatterChain Logo" width="150" height="150" />
  
  <p align="center">
    <b>Connect, Share, Engage: Your Thoughts Linked Forever</b>
  </p>
  
  <a href="https://github.com/shkshreyas/ChatterChain">
    <img src="https://img.shields.io/badge/GitHub-ChatterChain-blueviolet?style=for-the-badge&logo=github" alt="GitHub Repo" />
  </a>
  
  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-MongoDB-black?style=for-the-badge&logoColor=white&logo=mongodb&color=47A248" alt="mongodb" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Clerk-black?style=for-the-badge&logoColor=white&logo=clerk&color=6C47FF" alt="clerk" />
    <img src="https://img.shields.io/badge/-Typescript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
  </div>
</div>

## ✨ Features

<table>
  <tr>
    <td width="50%">
      <h3 align="center">🔐 Secure Authentication</h3>
      <p align="center">
        Sign in with email, Google, or GitHub using Clerk's secure authentication system, with comprehensive profile management
      </p>
    </td>
    <td width="50%">
      <h3 align="center">💬 Interactive Threads</h3>
      <p align="center">
        Create engaging threads and foster discussions with a fully-featured nested commenting system
      </p>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3 align="center">🔍 Advanced Search</h3>
      <p align="center">
        Find users and communities with our powerful search functionality with pagination
      </p>
    </td>
    <td width="50%">
      <h3 align="center">👥 Vibrant Communities</h3>
      <p align="center">
        Create communities, invite members, and manage roles with customizable template emails
      </p>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3 align="center">📱 Responsive Design</h3>
      <p align="center">
        Enjoy a seamless experience across all devices with our beautiful, responsive UI
      </p>
    </td>
    <td width="50%">
      <h3 align="center">⚡ Blazing Performance</h3>
      <p align="center">
        Experience lightning-fast page transitions with Next.js Server Side Rendering
      </p>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3 align="center">🔔 Real-time Notifications</h3>
      <p align="center">
        Stay updated with activity notifications when users interact with your content
      </p>
    </td>
    <td width="50%">
      <h3 align="center">📤 Media Uploads</h3>
      <p align="center">
        Easily share images and media with built-in UploadThing integration
      </p>
    </td>
  </tr>
</table>

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/shkshreyas/ChatterChain.git

# Navigate to the directory
cd ChatterChain

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 🔧 Environment Variables

Create a `.env` file with the following variables:

```
MONGODB_URL=
CLERK_SECRET_KEY=
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=
NEXT_CLERK_WEBHOOK_SECRET=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
```

## 🚀 Deploying to Vercel

To deploy ChatterChain to Vercel without localhost redirection issues:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure the following environment variables in Vercel:
   - `MONGODB_URL` - Your MongoDB connection string
   - `CLERK_SECRET_KEY` - Your Clerk secret key
   - `UPLOADTHING_SECRET` - Your UploadThing secret
   - `UPLOADTHING_APP_ID` - Your UploadThing app ID
   - `NEXT_CLERK_WEBHOOK_SECRET` - Your Clerk webhook secret
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` - Your Clerk publishable key
   - `NEXT_PUBLIC_CLERK_SIGN_IN_URL` - Set to `/sign-in`
   - `NEXT_PUBLIC_CLERK_SIGN_UP_URL` - Set to `/sign-up`
   - `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL` - Set to `/onboarding`
   - `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL` - Set to `/onboarding`
4. Set the output directory to `.next`
5. Deploy and visit your live site: [https://chatter-chain-gilt.vercel.app/](https://chatter-chain-gilt.vercel.app/)

**Important**: If you encounter localhost redirection issues:

- Ensure your Clerk application domain settings include your Vercel deployment URL
- In the Clerk dashboard, add your Vercel URL to the list of allowed URLs

## 💫 Experience the Future of Social Media

ChatterChain combines the best aspects of modern social platforms with innovative features to create a unique, engaging experience. Whether you're looking to connect with friends, join communities, or share your thoughts with the world, ChatterChain offers a secure, performant, and feature-rich platform.

<div align="center">
  <p>Developed with ❤️ by <a href="https://github.com/shkshreyas">Shreyas</a></p>
</div>
