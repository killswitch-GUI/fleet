package kolide

// Datastore combines all the interfaces in the Kolide DAL
type Datastore interface {
	UserStore
	QueryStore
	PackStore
	OsqueryStore
	EmailStore
	SessionStore
	Name() string
	Drop() error
	Migrate() error
}