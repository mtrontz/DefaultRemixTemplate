import { Form, redirect, useFetcher, useTransition} from "remix";
import type {ActionFunction, LoaderFunction} from "remix";

function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const action: ActionFunction = async ({ request }) => {
  await timeout(300);
  return redirect("/");
};

export const loader: LoaderFunction = async ({ request }) => {
  await timeout(300);
  return {};
};

export default function Index() {
  const fetcher = useFetcher();
  const transition = useTransition();

  const formIsSubmitting =
    transition && transition.submission?.formData.get("source") === "form";

  return (
    <div className="container">
      {formIsSubmitting ? transition.state : "idle"}
      <Form method="post">
        <input type="hidden" name="source" value="form" />
        <button type="submit" name="_action" value="add">
          Submit
        </button>
      </Form>
      {fetcher.state}
      <fetcher.Form method="post">
        <input type="hidden" name="source" value="fetcher" />
        <button type="submit" name="_action" value="add">
          Submit
        </button>
      </fetcher.Form>
    </div>
  );
}