import { Helmet } from "react-helmet";
export default function Dashboard() {
  return (
    <div className="max-w-6xl bg-green-300 mx-auto">
      <Helmet>
        <title>Dashboard | Gadget Pookie</title>
        <meta name="description" content="Dashboard" />
      </Helmet>
      <h1>Dashboard</h1>
    </div>
  );
}
