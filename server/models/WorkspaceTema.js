import mongoose from "mongoose";

const WorkspaceTemaSchema = new mongoose.Schema(
  {
    Workspacee_name: String,
    Workspacee_field: String,
    Workspacee_code: Number,

  },
  { timestamps: true }
);

const WorkspaceTeam = mongoose.model("WorkspaceTeam", WorkspaceTemaSchema);
export default WorkspaceTeam;
