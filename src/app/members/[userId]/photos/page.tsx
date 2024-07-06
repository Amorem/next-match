import { getUserPhotosByUserId } from "@/app/actions/memberActions";
import { CardBody, CardHeader, Divider, Image } from "@nextui-org/react";

export default async function PhotosPage({
	params,
}: {
	params: { userId: string };
}) {
	const photos = await getUserPhotosByUserId(params.userId);
	return (
		<>
			<CardHeader className="text-2xl font-semibold text-secondary">
				Photos
			</CardHeader>
			<Divider />
			<CardBody>
				<div className="grid grid-cols-5 gap-3">
					{photos &&
						photos.map((photo) => (
							<div key={photo.id}>
								<Image
									src={photo.url}
									width={300}
									height={300}
									alt="User photo"
									className="object-cover aspect-square"
								/>
							</div>
						))}
				</div>
			</CardBody>
		</>
	);
}
