import Card from "@/components/card";
import Link from "next/link";
import React from "react";

const NotificationsPage = () => {
  return (
    <Card>
      <div>Notifications</div>
      <div>
        <Link href="/dashboard/archive">Archive</Link>
      </div>
    </Card>
  );
};

export default NotificationsPage;
