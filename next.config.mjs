/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.pexels.com'
            }
        ]
    }
};

export default nextConfig;

//this is where we will write our configurations to use experimental next.js features
//also to use different urls to show our images