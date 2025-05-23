

package repositories

import (
	"database/sql"
	"fmt"

	_ "github.com/lib/pq"
)

type HelloRepository struct {
	db *sql.DB
}

func NewHelloRepository(db *sql.DB) *HelloRepository {
	return &HelloRepository{db: db}
}

func (hr *HelloRepository) helloRepository() (string, error) {
	var result string
	err := hr.db.QueryRow("SELECT hello FROM main_main").Scan(&result)
	if err != nil {
		return "", err
	}
	return result, nil
}