import { calculateAge } from "@/lib/util";
import { Card, CardFooter, Image } from "@nextui-org/react";
import { Member } from "@prisma/client";
import Link from "next/link";
type Props = {
	member: Member;
};

export default function MemberCard({ member }: Props) {
	return (
		<Card fullWidth as={Link} href={`/members/${member.userId}`} isPressable>
			<Image
				isZoomed
				src={member.image || "/images/user.png"}
				alt={member.name}
				width={300}
				className="aspect-square object-cover"
			/>
			<CardFooter className="flex justify-start bg-dark-gradient overflow-hidden absolute bottom-0 z-10">
				<div className="flex flex-col text-white">
					<span className="font-semibold">
						{member.name}, {calculateAge(member.dateOfBirth)}
					</span>
					<span text-sm>{member.city}</span>
				</div>
			</CardFooter>
		</Card>
	);
}