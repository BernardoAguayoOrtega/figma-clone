import { useOthers } from "@/liveblocks.config";

function CollaborativeApp() {
  const others = useOthers();
  const usersCount = others.length;
  return <div>There are {usersCount} other user(S) onlune</div>;
}

export default CollaborativeApp;
