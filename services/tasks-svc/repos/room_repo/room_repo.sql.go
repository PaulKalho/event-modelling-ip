// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.27.0
// source: room_repo.sql

package room_repo

import (
	"context"

	"github.com/google/uuid"
)

const createRoom = `-- name: CreateRoom :one
INSERT INTO rooms (name, ward_id) VALUES ($1, $2) RETURNING id, consistency
`

type CreateRoomParams struct {
	Name   string
	WardID uuid.UUID
}

type CreateRoomRow struct {
	ID          uuid.UUID
	Consistency int64
}

func (q *Queries) CreateRoom(ctx context.Context, arg CreateRoomParams) (CreateRoomRow, error) {
	row := q.db.QueryRow(ctx, createRoom, arg.Name, arg.WardID)
	var i CreateRoomRow
	err := row.Scan(&i.ID, &i.Consistency)
	return i, err
}

const deleteRoom = `-- name: DeleteRoom :exec
DELETE FROM rooms WHERE id = $1
`

func (q *Queries) DeleteRoom(ctx context.Context, id uuid.UUID) error {
	_, err := q.db.Exec(ctx, deleteRoom, id)
	return err
}

const getRoomWithBedsById = `-- name: GetRoomWithBedsById :many
SELECT
	rooms.id, rooms.name, rooms.ward_id, rooms.consistency,
	beds.id as bed_id,
	beds.name as bed_name,
	beds.consistency as bed_consistency
FROM rooms
		 LEFT JOIN beds ON beds.room_id = rooms.id
WHERE rooms.id = $1
ORDER BY beds.name ASC
`

type GetRoomWithBedsByIdRow struct {
	Room           Room
	BedID          uuid.NullUUID
	BedName        *string
	BedConsistency *int64
}

func (q *Queries) GetRoomWithBedsById(ctx context.Context, roomID uuid.UUID) ([]GetRoomWithBedsByIdRow, error) {
	rows, err := q.db.Query(ctx, getRoomWithBedsById, roomID)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	items := []GetRoomWithBedsByIdRow{}
	for rows.Next() {
		var i GetRoomWithBedsByIdRow
		if err := rows.Scan(
			&i.Room.ID,
			&i.Room.Name,
			&i.Room.WardID,
			&i.Room.Consistency,
			&i.BedID,
			&i.BedName,
			&i.BedConsistency,
		); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const getRoomsWithBeds = `-- name: GetRoomsWithBeds :many
SELECT
	rooms.id, rooms.name, rooms.ward_id, rooms.consistency,
	beds.id as bed_id,
	beds.name as bed_name,
	beds.consistency as bed_consistency
FROM rooms
		 LEFT JOIN beds ON beds.room_id = rooms.id
WHERE (rooms.ward_id = $1 OR $1 IS NULL)
ORDER BY rooms.id ASC, beds.name ASC
`

type GetRoomsWithBedsRow struct {
	Room           Room
	BedID          uuid.NullUUID
	BedName        *string
	BedConsistency *int64
}

func (q *Queries) GetRoomsWithBeds(ctx context.Context, wardID uuid.NullUUID) ([]GetRoomsWithBedsRow, error) {
	rows, err := q.db.Query(ctx, getRoomsWithBeds, wardID)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	items := []GetRoomsWithBedsRow{}
	for rows.Next() {
		var i GetRoomsWithBedsRow
		if err := rows.Scan(
			&i.Room.ID,
			&i.Room.Name,
			&i.Room.WardID,
			&i.Room.Consistency,
			&i.BedID,
			&i.BedName,
			&i.BedConsistency,
		); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const getRoomsWithBedsAndPatientsAndTasksCountByWard = `-- name: GetRoomsWithBedsAndPatientsAndTasksCountByWard :many
SELECT
	rooms.id as room_id,
	rooms.name as room_name,
	rooms.consistency as room_consistency,
	beds.id as bed_id,
	beds.name as bed_name,
	beds.consistency as bed_consistency,
	patients.id as patient_id,
	patients.human_readable_identifier as patient_human_readable_identifier,
	patients.consistency as patient_consistency,
	(
		SELECT COUNT(id)
		FROM tasks
		WHERE tasks.patient_id = patients.id
		  AND tasks.status = $1
	) as todo_tasks_count,
	(
		SELECT COUNT(id)
		FROM tasks
		WHERE tasks.patient_id = patients.id
		  AND tasks.status = $2
	) as in_progress_tasks_count,
	(
		SELECT COUNT(id)
		FROM tasks
		WHERE tasks.patient_id = patients.id
		  AND tasks.status = $3
	) as done_tasks_count
FROM rooms
		 LEFT JOIN beds ON beds.room_id = rooms.id
		 LEFT JOIN patients ON patients.bed_id = beds.id
WHERE rooms.ward_id = $4
ORDER BY rooms.id ASC, beds.name ASC
`

type GetRoomsWithBedsAndPatientsAndTasksCountByWardParams struct {
	TodoStatus       int32
	InProgressStatus int32
	DoneStatus       int32
	WardID           uuid.UUID
}

type GetRoomsWithBedsAndPatientsAndTasksCountByWardRow struct {
	RoomID                         uuid.UUID
	RoomName                       string
	RoomConsistency                int64
	BedID                          uuid.NullUUID
	BedName                        *string
	BedConsistency                 *int64
	PatientID                      uuid.NullUUID
	PatientHumanReadableIdentifier *string
	PatientConsistency             *int64
	TodoTasksCount                 int64
	InProgressTasksCount           int64
	DoneTasksCount                 int64
}

func (q *Queries) GetRoomsWithBedsAndPatientsAndTasksCountByWard(ctx context.Context, arg GetRoomsWithBedsAndPatientsAndTasksCountByWardParams) ([]GetRoomsWithBedsAndPatientsAndTasksCountByWardRow, error) {
	rows, err := q.db.Query(ctx, getRoomsWithBedsAndPatientsAndTasksCountByWard,
		arg.TodoStatus,
		arg.InProgressStatus,
		arg.DoneStatus,
		arg.WardID,
	)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	items := []GetRoomsWithBedsAndPatientsAndTasksCountByWardRow{}
	for rows.Next() {
		var i GetRoomsWithBedsAndPatientsAndTasksCountByWardRow
		if err := rows.Scan(
			&i.RoomID,
			&i.RoomName,
			&i.RoomConsistency,
			&i.BedID,
			&i.BedName,
			&i.BedConsistency,
			&i.PatientID,
			&i.PatientHumanReadableIdentifier,
			&i.PatientConsistency,
			&i.TodoTasksCount,
			&i.InProgressTasksCount,
			&i.DoneTasksCount,
		); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const getRoomsWithBedsWithPatientsByWard = `-- name: GetRoomsWithBedsWithPatientsByWard :many
SELECT
	rooms.id as room_id,
	rooms.name as room_name,
	rooms.consistency as room_consistency,
	beds.id as bed_id,
	beds.name as bed_name,
	beds.consistency as bed_consistency,
	patients.id as patient_id,
	patients.human_readable_identifier as patient_human_readable_identifier,
	patients.consistency as patient_consistency
FROM rooms
		 LEFT JOIN beds ON beds.room_id = rooms.id
		 LEFT JOIN patients ON patients.bed_id = beds.id
WHERE rooms.ward_id = $1
ORDER BY rooms.id ASC, beds.name ASC
`

type GetRoomsWithBedsWithPatientsByWardRow struct {
	RoomID                         uuid.UUID
	RoomName                       string
	RoomConsistency                int64
	BedID                          uuid.NullUUID
	BedName                        *string
	BedConsistency                 *int64
	PatientID                      uuid.NullUUID
	PatientHumanReadableIdentifier *string
	PatientConsistency             *int64
}

func (q *Queries) GetRoomsWithBedsWithPatientsByWard(ctx context.Context, wardID uuid.UUID) ([]GetRoomsWithBedsWithPatientsByWardRow, error) {
	rows, err := q.db.Query(ctx, getRoomsWithBedsWithPatientsByWard, wardID)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	items := []GetRoomsWithBedsWithPatientsByWardRow{}
	for rows.Next() {
		var i GetRoomsWithBedsWithPatientsByWardRow
		if err := rows.Scan(
			&i.RoomID,
			&i.RoomName,
			&i.RoomConsistency,
			&i.BedID,
			&i.BedName,
			&i.BedConsistency,
			&i.PatientID,
			&i.PatientHumanReadableIdentifier,
			&i.PatientConsistency,
		); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const updateRoom = `-- name: UpdateRoom :one
UPDATE rooms
SET	name = coalesce($1, name),
	consistency = consistency + 1
WHERE id = $2
RETURNING consistency
`

type UpdateRoomParams struct {
	Name *string
	ID   uuid.UUID
}

func (q *Queries) UpdateRoom(ctx context.Context, arg UpdateRoomParams) (int64, error) {
	row := q.db.QueryRow(ctx, updateRoom, arg.Name, arg.ID)
	var consistency int64
	err := row.Scan(&consistency)
	return consistency, err
}