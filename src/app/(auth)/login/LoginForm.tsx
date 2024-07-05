"use client";
import { signInUser } from "@/app/actions/authActions";
import { LoginSchema, loginSchema } from "@/lib/schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Card, CardBody, CardHeader, Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { GiPadlock } from "react-icons/gi";
import { toast } from "react-toastify";

export default function LoginForm() {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors, isValid, isSubmitting },
	} = useForm<LoginSchema>({
		resolver: zodResolver(loginSchema),
		mode: "onTouched",
	});

	const onSubmit = async (data: LoginSchema) => {
		const result = await signInUser(data);
		// console.log("RESULT", result);
		if (result.status === "success") {
			router.push("/members");
		} else {
			toast.error("Invalid email or password");
		}
	};

	return (
		<Card className="w-2/5 mx-auto">
			<CardHeader className="flex flex-col items-center justify-center">
				<div className="flex flex-col gap-2 items-center text-secondary">
					<div className="flex flex-row items-center gap-3">
						<GiPadlock size={30} />
						<h1 className="text-3xl font-semibold">Login</h1>
					</div>
					<p className="text-neutral-500">Welcome back to NextMatch</p>
				</div>
			</CardHeader>
			<CardBody>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="space-y-4">
						<Input
							label="Email"
							variant="bordered"
							{...register("email")}
							isInvalid={!!errors.email}
							errorMessage={errors.email?.message}
							defaultValue=""
						/>
						<Input
							label="Password"
							variant="bordered"
							type="password"
							{...register("password")}
							isInvalid={!!errors.password}
							errorMessage={errors.password?.message}
							defaultValue=""
						/>
						<Button
							fullWidth
							color="secondary"
							type="submit"
							isDisabled={!isValid}
							isLoading={isSubmitting}
						>
							Login
						</Button>
					</div>
				</form>
			</CardBody>
		</Card>
	);
}
