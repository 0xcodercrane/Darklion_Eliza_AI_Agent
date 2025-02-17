import Image from "next/image";

function Liveagents() {
  // Sample data - replace with your actual data source
  const agents = [
    {
      id: "AGT001",
      image: "/img/dark_lion.webp",
      status: "Active",
      xHandle: "@darklion_1",
      discordUsername: "darklion#4321",
      telegramUsername: "@darklion_tg1",
      createdAt: "2024-01-15",
    },
    {
      id: "AGT002",
      image: "/img/dark_lion.webp",
      status: "Inactive",
      xHandle: "@lionbot_2",
      discordUsername: "lionbot#8765",
      telegramUsername: "@lionbot_tg2",
      createdAt: "2024-02-01",
    },
    {
      id: "AGT003",
      image: "/img/dark_lion.webp",
      status: "Active",
      xHandle: "@aiagent_3",
      discordUsername: "aiagent#9012",
      telegramUsername: "@aiagent_tg3",
      createdAt: "2024-02-15",
    },
    {
      id: "AGT004",
      image: "/img/dark_lion.webp",
      status: "Active",
      xHandle: "@darkbot_4",
      discordUsername: "darkbot#3456",
      telegramUsername: "@darkbot_tg4",
      createdAt: "2024-03-01",
    },
    {
      id: "AGT005",
      image: "/img/dark_lion.webp",
      status: "Inactive",
      xHandle: "@lionai_5",
      discordUsername: "lionai#7890",
      telegramUsername: "@lionai_tg5",
      createdAt: "2024-03-15",
    },
    {
      id: "AGT006",
      image: "/img/dark_lion.webp",
      status: "Active",
      xHandle: "@aibot_6",
      discordUsername: "aibot#2345",
      telegramUsername: "@aibot_tg6",
      createdAt: "2024-04-01",
    },
    {
      id: "AGT007",
      image: "/img/dark_lion.webp",
      status: "Active",
      xHandle: "@darkagent_7",
      discordUsername: "darkagent#6789",
      telegramUsername: "@darkagent_tg7",
      createdAt: "2024-04-15",
    },
    {
      id: "AGT008",
      image: "/img/dark_lion.webp",
      status: "Inactive",
      xHandle: "@lionagent_8",
      discordUsername: "lionagent#0123",
      telegramUsername: "@lionagent_tg8",
      createdAt: "2024-05-01",
    },
    {
      id: "AGT009",
      image: "/img/dark_lion.webp",
      status: "Active",
      xHandle: "@botai_9",
      discordUsername: "botai#4567",
      telegramUsername: "@botai_tg9",
      createdAt: "2024-05-15",
    },
    {
      id: "AGT010",
      image: "/img/dark_lion.webp",
      status: "Active",
      xHandle: "@darkbot_10",
      discordUsername: "darkbot#8901",
      telegramUsername: "@darkbot_tg10",
      createdAt: "2024-06-01",
    },
    {
      id: "AGT011",
      image: "/img/dark_lion.webp",
      status: "Inactive",
      xHandle: "@lionbot_11",
      discordUsername: "lionbot#2345",
      telegramUsername: "@lionbot_tg11",
      createdAt: "2024-06-15",
    },
    {
      id: "AGT012",
      image: "/img/dark_lion.webp",
      status: "Active",
      xHandle: "@aiagent_12",
      discordUsername: "aiagent#6789",
      telegramUsername: "@aiagent_tg12",
      createdAt: "2024-07-01",
    },
    {
      id: "AGT013",
      image: "/img/dark_lion.webp",
      status: "Active",
      xHandle: "@darkagent_13",
      discordUsername: "darkagent#0123",
      telegramUsername: "@darkagent_tg13",
      createdAt: "2024-07-15",
    },
    {
      id: "AGT014",
      image: "/img/dark_lion.webp",
      status: "Inactive",
      xHandle: "@lionai_14",
      discordUsername: "lionai#4567",
      telegramUsername: "@lionai_tg14",
      createdAt: "2024-08-01",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-white">Live Agents Table</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border-gray-700">
          <thead>
            <tr className="bg-gray-900">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Agent ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Image
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                X Handle
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Discord
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Telegram
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Created At
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {agents.map((agent) => (
              <tr key={agent.id} className="hover:bg-gray-700 text-gray-300">
                <td className="px-6 py-4 whitespace-nowrap">{agent.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Image
                    src={agent.image}
                    alt={`Agent ${agent.id}`}
                    className="h-10 w-10 rounded-full"
                    width={40}
                    height={40}
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      agent.status === "Active"
                        ? "bg-green-900 text-green-300"
                        : "bg-red-900 text-red-300"
                    }`}
                  >
                    {agent.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{agent.xHandle}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {agent.discordUsername}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {agent.telegramUsername}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {agent.createdAt}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-blue-400 hover:text-blue-300 mr-2 px-3 py-1 rounded-md bg-blue-900/30 transition-all duration-200 hover:bg-blue-800/40 focus:ring-2 focus:ring-blue-500">
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                      Edit
                    </span>
                  </button>
                  <button className="text-red-400 hover:text-red-300 px-3 py-1 rounded-md bg-red-900/30 transition-all duration-200 hover:bg-red-800/40 focus:ring-2 focus:ring-red-500">
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                      Delete
                    </span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Liveagents;
