/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		build_mode:
			process.env.NODE_ENV === "development"
				? "development"
				: "production",
	},
};

module.exports = nextConfig;
