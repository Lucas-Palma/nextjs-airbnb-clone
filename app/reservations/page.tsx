import EmptyState from "../components/EmptyState";
import ClientOny from "../components/ClientOnly";

import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import ClientOnly from "../components/ClientOnly";
import ReservationsClient from "./ReservationsClient";

const ReservationsPage = async () => {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return (
            <ClientOny>
                <EmptyState
                    title="Unauthorized"
                    subtitle="Please login"
                />
            </ClientOny>
        )
    }

    const reservations = await getReservations({
        authorId: currentUser.id
    });

    if (reservations.length === 0) {
        return (
            <ClientOny>
                <EmptyState
                    title="No reservations found"
                    subtitle="Looks like you have no reservations on your properties"
                />
            </ClientOny>
        )
    }

    return (
        <ClientOnly>
            <ReservationsClient
                reservations={reservations}
                currentUser={currentUser}
            />
        </ClientOnly>
    )
}

export default ReservationsPage