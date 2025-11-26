import { PropsWithChildren } from "react";
import ComingSoon from "./_components/coming-soon";

export default function LandingPageLayout({ children }: PropsWithChildren) {
	if (process.env.NEXT_PUBLIC_ENABLE_SITE !== "1") {
		return <ComingSoon />;
	}
	return <>{children}</>;
}
