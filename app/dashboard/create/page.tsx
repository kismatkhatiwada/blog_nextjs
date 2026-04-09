
import { handleSubmission } from "@/app/actions";
import Submitbutton from "@/components/general/Submitbutton";

export default function CreateBlogRoute() {
  return (
    <div className="card max-w-lg mx-auto bg-base-100 card-md shadow-md">
      <div className="card-body">
        <h2 className="card-title">Create Post</h2>
        <p>Create a new post to share to the world.</p>
        <div>
            <form className="flex flex-col gap-4" action={handleSubmission}>
                <div className="flex flex-col gap-2">
                    <label>Title</label>
                    <input type="text" name="title" className="input input-bordered w-120 " required placeholder="Title" suppressHydrationWarning />
                </div>
                <div className="flex flex-col gap-2">
                    <label>Content</label>
                    <textarea className="input textarea input-bordered w-120" name="content" required placeholder="Content" suppressHydrationWarning />
                </div>
                <div className="flex flex-col gap-2">
                    <label>Image URL</label>
                    <input type="url" className="input input-bordered w-120" name="url" required placeholder="Image url" suppressHydrationWarning/>
                </div>
                <Submitbutton/>
            </form>
        </div>
      </div>
    </div>
  );
}
