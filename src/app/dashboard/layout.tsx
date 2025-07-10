import { DashboardHeader } from "./components/header";

export default function DashBoardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <DashboardHeader />
      {children}
    </>
  );
}
