import mongoose from "mongoose";

const WorkspaceSchema = new mongoose.Schema(
  {
    Workspacee_name: String,
    Workspacee_field: String,
    Workspacee_code: Number,

  },
  { timestamps: true }
);

const Workspace = mongoose.model("Workspace", WorkspaceSchema);
export default Workspace;
