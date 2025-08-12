import { createCommand } from "#base";

export default createCommand({
    name: "manage",
    description: "Manage Command",
    defaultMemberPermissions: ["Administrator"],
    dmPermission: false,
});