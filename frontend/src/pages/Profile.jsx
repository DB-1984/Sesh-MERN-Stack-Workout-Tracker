import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import {
  Loader2,
  User,
  Mail,
  Lock,
  Scale,
  Ruler,
  Target,
  Settings2,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  useGetProfileQuery,
  useUpdateProfileMutation,
} from "@/slices/userApiSlice";
import { setUserInfo } from "../slices/userSlice";

const sectionHeadingClass =
  "border-b border-zinc-100 pb-3 text-lg font-semibold tracking-tight text-zinc-900 dark:border-zinc-900 dark:text-zinc-100";

const labelClass =
  "flex items-center gap-2 text-sm font-medium tracking-normal text-zinc-700 dark:text-zinc-300";

const fieldClass =
  "h-12 w-full rounded-md border-none bg-zinc-50 px-3 py-2 text-base md:text-base font-normal tracking-normal text-zinc-900 placeholder:text-zinc-400 placeholder:font-normal shadow-none focus-visible:ring-2 focus-visible:ring-black dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus-visible:ring-white";

const iconClass = "h-3.5 w-3.5 text-zinc-500";

export default function ProfilePage() {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);
  const { data: profileData, isLoading } = useGetProfileQuery();
  const [updateProfile, { isLoading: isUpdating }] =
    useUpdateProfileMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      weight: "",
      height: "",
      goal: "General",
      targets: "",
    },
  });

  useEffect(() => {
    const source = profileData || userInfo;

    if (source) {
      reset({
        name: source.name || "",
        email: source.email || "",
        password: "",
        weight: source.weight || "",
        height: source.height || "",
        goal: source.goal || "General",
        targets: source.targets || "",
      });
    }
  }, [profileData, userInfo, reset]);

  const onSubmit = async (data) => {
    try {
      const updated = await updateProfile(data).unwrap();
      dispatch(setUserInfo(updated));
      toast.success("Profile updated!");
      reset({ ...data, password: "" });
    } catch (err) {
      toast.error(err?.data?.message || "Failed to update profile");
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-zinc-500">
        <Loader2 className="mb-3 h-6 w-6 animate-spin" />
        <span className="text-sm font-medium">Syncing profile…</span>
      </div>
    );
  }

  return (
    <>
      <div className="mb-10 flex items-center gap-3">
        <Settings2 className="h-5 w-5 text-zinc-500" />
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          Profile
        </h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex-1 space-y-10">
        {/* Account */}
        <section className="space-y-5">
          <h3 className={sectionHeadingClass}>Account</h3>

          <div className="space-y-5">
            <div className="grid gap-2">
              <Label htmlFor="name" className={labelClass}>
                <User className={iconClass} />
                Full Name
              </Label>

              <Input
                id="name"
                {...register("name", { required: "Name is required" })}
                className={fieldClass}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
              />

              {errors.name && (
                <p id="name-error" className="text-sm text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email" className={labelClass}>
                <Mail className={iconClass} />
                Email Address
              </Label>

              <Input
                id="email"
                disabled
                {...register("email")}
                className={`${fieldClass} disabled:opacity-60`}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password" className={labelClass}>
                <Lock className={iconClass} />
                Password
              </Label>

              <Input
                id="password"
                type="password"
                autoComplete="new-password"
                placeholder="••••••••"
                {...register("password")}
                className={fieldClass}
              />
            </div>
          </div>
        </section>

        {/* Biometrics */}
        <section className="space-y-5">
          <h3 className={sectionHeadingClass}>Biometrics</h3>

          <div className="grid grid-cols-2 gap-6">
            <div className="grid gap-2">
              <Label htmlFor="weight" className={labelClass}>
                <Scale className={iconClass} />
                Weight (kg)
              </Label>

              <Input
                id="weight"
                type="number"
                {...register("weight", {
                  setValueAs: (v) => (v === "" ? undefined : parseFloat(v)),
                })}
                className={fieldClass}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="height" className={labelClass}>
                <Ruler className={iconClass} />
                Height (cm)
              </Label>

              <Input
                id="height"
                type="number"
                {...register("height", {
                  setValueAs: (v) => (v === "" ? undefined : parseFloat(v)),
                })}
                className={fieldClass}
              />
            </div>
          </div>
        </section>

        {/* Goals */}
        <section className="space-y-5">
          <h3 className={sectionHeadingClass}>Goals</h3>

          <div className="grid gap-2">
            <Label htmlFor="goal" className={labelClass}>
              <Target className={iconClass} />
              Current Goal
            </Label>

            <select
              id="goal"
              {...register("goal")}
              className={`${fieldClass} focus-visible:outline-none`}
            >
              <option value="Strength">Strength</option>
              <option value="Hypertrophy">Hypertrophy</option>
              <option value="Endurance">Endurance</option>
              <option value="General">General</option>
            </select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="targets" className={labelClass}>
              <Target className={iconClass} />
              Specific Targets
            </Label>

            <textarea
              id="targets"
              {...register("targets")}
              placeholder="e.g. 100kg bench, 5km under 20 mins..."
              className={`${fieldClass} h-auto min-h-[100px] resize-y py-3 leading-relaxed focus-visible:outline-none`}
            />
          </div>
        </section>

        <div className="w-full pt-4">
          <Button
            type="submit"
            disabled={isUpdating}
            className="h-10 bg-black px-5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 disabled:opacity-50 dark:bg-white/90 dark:text-black dark:hover:bg-white"
          >
            {isUpdating ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Updating…
              </>
            ) : (
              "Update"
            )}
          </Button>
        </div>
      </form>
    </>
  );
}