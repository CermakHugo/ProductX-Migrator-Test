

package services

import (
	"hello_repository"
)

func hello_service() string {
	return hello_repository.hello_repository()
}