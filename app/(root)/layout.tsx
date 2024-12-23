import MobileNavigation from "@/components/MobileNavigation";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { ReactNode } from "react";
import { getCurrentUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import { Toaster } from "@/components/ui/toaster"

const Layout = async ({ children }: { children: ReactNode }) => {
    const currentUser = await getCurrentUser();

    if (!currentUser) return redirect("/sign-in");
  return (
    <main className="flex h-screen">
      <Sidebar {...currentUser}/>
      <section className="flex h-full flex-1 flex-col">
        <MobileNavigation {...currentUser}/>
        <Header userId={currentUser.$id} accountId={currentUser.accountId} />
        <div className="main-content">{children}</div>
      </section>
      <Toaster />
    </main>
  );
};
export default Layout;